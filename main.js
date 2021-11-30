//objeto com os usuarios das redes sociais.
const linksSocialMedia = {
  github: 'ivolbf',
  youtube: 'channel/UCm_ugeSfO7Qbi8i-v6Sd7LQ',
  facebook: 'ivo.braga',
  instagram: 'ivobragalbf',
  twitter: 'ivobragafilho '
}

//adicionando os links das redes sociais na <ul>
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// consumindo a api do GitHub
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      photoProfile.src = data.avatar_url
      userName.textContent = data.name
      github.children[1].textContent = data.login
      userBio.textContent = data.bio
      github.href = data.html_url
    })
}
getGitHubProfileInfos()
