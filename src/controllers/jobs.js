const { getAsync } = require('../../config/redis')

class Jobs {

  async index(req, res) {
    const result = await getAsync('github')
    const data = JSON.parse(result)

    const numJobs = data.length
    const numPages = Math.ceil(numJobs / 50)
    let page = req.params.page
    page = page - 1 > numPages || page - 1 < 0 ? 0 : page -1

    const index = page
    const jobsOnPage = data.slice(index * 50, (index * 50) + 50)

    const jobs = {
      total_jobs: numJobs,
      page,
      total_pages: numPages,
      jobs: jobsOnPage
    }

    return res.send({data: jobs})
  }
 

  async search(req, res) {
    const result = await getAsync('github')
    const data = JSON.parse(result)

    const searchStr = req.query.search
    const searchTerms = searchStr.split(' ')

    if(searchTerms.length === 0 || !searchTerms) {
      return this.index(req, res)
    }

    const filteredJobs = data.filter(job => searchTerms.some(term => job.title.includes(term)))

    const numJobs = filteredJobs.length
    const numPages = Math.ceil(numJobs / 50)
    let page = req.query.page
    page = page > numPages || page < 0 ? 0 : page

    const index = page
    const jobsOnPage = filteredJobs.slice(index * 50, (index * 50) + 50)

    const jobs = {
      total_jobs: numJobs,
      page,
      total_pages: numPages,
      jobs: jobsOnPage
    }
    
    return res.send({data: jobs})
  }
  
}

module.exports = Jobs