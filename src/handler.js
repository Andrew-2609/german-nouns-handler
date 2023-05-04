import fs from 'fs/promises'

const args = process.argv
const fileInputPath = args[args.indexOf('-i') + 1]
const fileOutputPath = args[args.indexOf('-o') + 1]

export async function handleNouns() {
  try {
    const data = await fs.readFile(fileInputPath, { encoding: 'utf-8' })

    const regex = /([A-Z][A-Za-zäëïöüß\-\.]{0,})\s({[mfn]})/g
    const matches = [...data.matchAll(regex)]
    const nouns = []
    const formattedNouns = []

    const readingStart = new Date().getTime()

    for (const match of matches) {
      const noun = match[1]

      // to avoid duplicates
      if (nouns.indexOf(noun) !== -1) {
        continue
      } else {
        nouns.push(noun)
      }

      const gender = match[2]
      const [article, formattedGender] = getArticleAndFormattedGender({ gender })

      formattedNouns.push({ noun, gender: formattedGender, article })
    }

    const readingEnd = new Date().getTime()

    console.log(`Reading finished. It took about ${((readingEnd - readingStart) / 1000).toFixed(2)} seconds.`)

    await fs.writeFile(fileOutputPath, JSON.stringify(formattedNouns))
  } catch (err) {
    console.error(err.message)
  }
}

function getArticleAndFormattedGender({ gender }) {
  switch (gender) {
    case '{m}':
      return ['der', 'masculine']
      break
    case '{f}':
      return ['die', 'feminine']
      break
    default:
      return ['das', 'neuter']
  }
}
