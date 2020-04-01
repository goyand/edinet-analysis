const axios = require('axios');
const fs = require('fs');
const unzip = require('unzip');

const base_url = 'https://disclosure.edinet-fsa.go.jp/api/v1/documents'

const getList = async ({ year, month, date }) => {
  const url_list = `${base_url}.json?date=${year}-${month}-${date}&type=2`;
  const { data } = await axios.get(url_list);
  // console.log(data)
  return data;
}

const parseList = ({ data }) => {
  const date = data.metadata.parameter.date;
  const docs = data.results.map(result => {
    const { docID, edinetCode, filerName } = result;

    return { docID, edinetCode, filerName };
  })

  const filteredDocs = removeDuplicate(docs)

  return { date, docs: filteredDocs };
}

const removeDuplicate = (docs) => {
  return docs.filter((doc, index, array) => {
    return doc.edinetCode && array.findIndex(doc2 => doc.edinetCode === doc2.edinetCode) === index;
  })
}

// getList({ year: '2019', month: '04', date: '03' }).then(data => {
//   const result = parseList({ data });
  
//   console.log(result);
// })

const getDoc = async ({ docID }) => {
  const url_doc = `${base_url}/${docID}?type=1`;
  const { data } = await axios.get(url_doc);
  return data;
}

getDoc({ docID: 'S100FJZ0' }).then(data => {
  console.log(data)
  // fs.writeFileSync('output.txt', data)
  // fs.createReadStream('./output.txt').pipe(unzip.Extract({ path: './tmp/' }));
})

module.exports = { removeDuplicate };