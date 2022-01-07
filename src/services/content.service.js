const content = require('../database.json');

module.exports = function ContentService() {
    const chunks = ~~(content.length / 20);
    const pages = [];
    for (let i = 0; i < chunks; i++) {
      const start = i * 20;
      const end = start + 20;
      const page = content.slice(start, end);
      pages.push(page);
    }
    
    function getAllContent(page = 1) {
      console.log(page);
      if (page < 1) throw new Error('page can not be lower than 1');
      return {
        page,
        results: pages[page - 1],
        totalPages: pages.length,
        next: page + 1 > pages.length ? null : page + 1,
      };
    }

    return {
      getAllContent,
    }
}




