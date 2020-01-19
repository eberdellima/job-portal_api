const { getAsync } = require('../../config/redis')

class Jobs {

  async index(req, res) {
    const result = await getAsync('github')
    const data = JSON.parse(result)

    const numJobs = data.length
    const numPages = Math.ceil(numJobs / 50)
    let page = req.params.page
    page = page > numPages || page <= 0 ? 1 : page

    const index = page -1
    const jobsOnPage = data.slice(index * 50, (index * 50) + 50)

    const jobs = {
      total_jobs: numJobs,
      page,
      total_pages: numPages,
      jobs: jobsOnPage
    }

    res.send({data: jobs})
  }
  
}

module.exports = Jobs