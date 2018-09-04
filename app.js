const baseUrl = "https://dino-1-server.herokuapp.com/"

getJobs = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => addJobs(data))
}
getJobs(baseUrl)

addJobs = (jobArray) => {
    for (let i in jobArray) {
        let newLi = document.createElement('li')
        let newH4 = document.createElement('h4')
        let newP = document.createElement('p')
        let newSmall = document.createElement('small')
        let newSmall2 = document.createElement('small')

        newH4.innerText = jobArray[i].title
        newSmall.innerText = jobArray[i].pay
        newP.innerText = jobArray[i].description
        newSmall2.innerText = `${jobArray[i].interested.length} dinos are interested in this job`

        newLi.appendChild(newH4)
        newLi.appendChild(newSmall)
        newLi.appendChild(newP)
        newLi.appendChild(newSmall2)

        let post = document.querySelector('ul')
        post.appendChild(newLi)
    }
}

document.querySelector('.job-form').addEventListener("submit", function(e) {
    e.preventDefault()
    let input = document.getElementsByName('title')[0].value
    let pay = document.getElementsByName('pay')[0].value
    let sub = document.getElementsByName('description')[0].value

    let container = document.querySelector('#job-listings')
    let listing = document.createElement("li")

    let newNewh4 = document.createElement('h4')
    let newNewSmall = document.createElement('small')
    let newNewP = document.createElement('p')
    let newNewSmall2 = document.createElement('small')

    newNewh4.innerText = input
    newNewSmall.innerText = pay
    newNewP.innerText = sub
    newNewSmall2.innerText = `0 dinos are interested in this job`

    listing.appendChild(newNewh4)
    listing.appendChild(newNewSmall)
    listing.appendChild(newNewP)
    listing.appendChild(newNewSmall2)

    container.prepend(listing)

    let form = document.querySelector('.job-form')
    form.reset()
})

