import * as inquirer from 'inquirer'
import { JSDOM } from 'jsdom'
import fetch from 'node-fetch'
import { URL } from 'url'

import Season from '../models/Season'

/* const fetchSeasons = serieName => {
  const url = `https://www.tv-subs.com/tv/${serieName}`
  return new Promise((resolve, reject) => {
    _searchSeason(url)
      .then(_handleHTML)
      .then(listOfSeasons => resolve(listOfSeasons))
      .catch(err => reject(err))
  })
} */

export const searchSeason = async (url: URL): Promise<string> => {
  return await fetch(url.href).then(res => res.text())
}

/* const _handleHTML = html => {
  const dom = new JSDOM(html)
  const listOfElements = dom.window.document.querySelectorAll('.season-list li')
  const listOfSeasons = []
  let season = {}

  listOfElements.forEach(li => {
    season = _mountSeasonFromLi(li)

    if (season.name.toLowerCase() !== 'other') listOfSeasons.push(season)
  })

  return listOfSeasons
}

const _mountSeasonFromLi = li => {
  const name = li.textContent
  const link = li.firstElementChild.href
  return new Season(name, link)
}

const seasonPrompt = listOfSeason => {
  const question = {
    choices: [],
    message: 'Choose the season',
    name: 'season',
    type: 'list',
    filter: function(answer) {
      return listOfSeason.find(season => season.name === answer)
    },
  }
  question.choices = listOfSeason.map(serie => serie.name)

  return inquirer.prompt(question)
}
 */