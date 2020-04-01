const { removeDuplicate } = require('./index');

const test_docs = [
  { docID: 'S100FI79',
    edinetCode: 'E06748',
    filerName: '大和証券投資信託委託株式会社' },
  { docID: 'S100FI7A',
    edinetCode: 'E06748',
    filerName: '大和証券投資信託委託株式会社' },
  { docID: 'S100FJQX',
    edinetCode: 'E26483',
    filerName: 'Ｈａｒｄｉｎｇ　Ｌｏｅｖｎｅｒ　ＬＰ' },
  { docID: 'S100FC24',
    edinetCode: 'E33073',
    filerName: '株式会社ＬＩＸＩＬビバ' },
  { docID: 'S100FJZN',
    edinetCode: 'E33306',
    filerName: '東芝インフラシステムズ株式会社' },
  { docID: 'S100FJZR',
    edinetCode: 'E01046',
    filerName: '株式会社ファンケル' },
  { docID: 'S100FI6R',
    edinetCode: 'E06748',
    filerName: '大和証券投資信託委託株式会社' },
]

describe('index', () => {
  describe('removeDuplicate', () => {
    it('removes duplicate elements', () => {
      expect(removeDuplicate(test_docs)).toEqual([
        test_docs[0],
        test_docs[2],
        test_docs[3],
        test_docs[4],
        test_docs[5]
      ])
    })
  })
})