import { adverbs, altSalutationsFemale, altSalutationsMale, recipientAdjectives, recipientNouns, senderAdjectives, senderNouns, verbs } from "../@constants/wordBank";
import { defaultSentences } from '../@constants/sentenceBank';
import { LoveLetter } from "../@types";

const getRandom = (arr: Array<string>) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const toTitleCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
};

const generateLetter = (recipient?: string, sender?: string, recipientGender: string | null = 'female') => {
  const salutation =
    `${toTitleCase(getRandom(recipientAdjectives))}
  ${recipient ? recipient : toTitleCase(recipientGender === 'female' ? getRandom(altSalutationsFemale) : getRandom(altSalutationsMale))},
  `
  const generated1 =
    `My ${getRandom(senderAdjectives)}
  ${getRandom(senderNouns)}
  ${getRandom(adverbs)} 
  ${getRandom(verbs)} 
  your 
  ${getRandom(recipientNouns)}.
  `

  const generated2 = `You are my ${getRandom(senderAdjectives)} ${getRandom(senderNouns)}.`

  const body = generated1 + getRandom(defaultSentences) + generated2

  const signOff = `Yours ${getRandom(adverbs)}, `
  const senderName = `${sender ? sender : 'Anonymous'}`

  const letter: LoveLetter = { generated: true, salutation: salutation, body: body, signOff: signOff, sender: senderName }

  return letter
}

export { generateLetter }