const content = require('../database.json');
const teachers = require('../teachers.json');
const { paginate } = require('../utils/paginate');

const PAGE_SIZE = 20;

module.exports = function ContentService() {
    const pages = paginate(content, PAGE_SIZE);

    function addTeacherToContent(content) {
      const formatTeachers = teachers.reduce((obj, t) => {
        return {
          ...obj,
          [t.id]: t,
        };
      }, {});
      return content.map(c => ({ ...c, teacher: formatTeachers[c.teacher]}));
    }
    
    function getAllContent(page = 1) {
      if (page < 1) throw new Error('page can not be lower than 1');
      return {
        page,
        results: addTeacherToContent(pages[page - 1]),
        totalPages: pages.length,
        next: page + 1 > pages.length ? null : page + 1,
      };
    }

    function getContentByCategory(categories, page=1) {
        if (page < 1) throw new Error('page can not be lower than 1');
        console.log(categories);
        const compare = typeof categories === 'string' ?
          (c) => c.category === categories
          :
          (c) => categories.includes(c.category)
        const filterData = content.filter(compare);
        const results = paginate(filterData, PAGE_SIZE);
        return {
          page,
          results: addTeacherToContent(results[page - 1]),
          totalPages: results.length,
          next: page + 1 > pages.length ? null : page + 1,
          categories,
        }
    }

    return {
      getAllContent,
      getContentByCategory
    }
}




