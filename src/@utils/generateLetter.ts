import { adverbs, altSalutationsFemale, altSalutationsMale, bodyPartsFemale, bodyPartsMale, recipientAdjectives, recipientNouns, senderAdjectives, senderNouns, verbs } from "../@constants/wordBank";
import { defaultSentencesSet1, defaultSentencesSet2, forHerSentences, forHimSentences } from '../@constants/sentenceBank';
import { LoveLetter } from "../@types";
import { toTitleCase } from "./toTitleCase";
import { getRandom } from "./getRandom";

const generateLetter = (recipient?: string, sender?: string, recipientGender: string | null = 'female'): LoveLetter => {
  const salutation: string =
    `${toTitleCase(getRandom(recipientAdjectives))} ${recipient ? recipient : toTitleCase(recipientGender === 'female' ? getRandom(altSalutationsFemale) : getRandom(altSalutationsMale))}, `
  const generated1: string =
    `My ${getRandom(senderAdjectives)} ${getRandom(senderNouns)} ${getRandom(adverbs)} ${getRandom(verbs)} your ${getRandom(recipientNouns)}. `

  const generated2: string =
    `You are my ${getRandom(senderAdjectives)} ${getRandom(senderNouns)}. `

  const generated3: string =
    `My ${getRandom(senderNouns)} ${getRandom(verbs)} for your ${getRandom(recipientNouns)}. `

  const generated4: string =
    `Your ${getRandom(recipientAdjectives)} ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)} is my ${getRandom(senderAdjectives)} ${getRandom(senderNouns)}. `

  const generated5: string = 
  `I am so happy to wake up to your ${getRandom(recipientAdjectives)} ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)}, your ${getRandom(recipientAdjectives)} ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)}, and ${getRandom(recipientAdjectives)} ${getRandom(recipientGender === 'female' ? bodyPartsFemale : bodyPartsMale)}. `

  const generated6: string =
    `You are my ${getRandom(senderAdjectives)} ${getRandom(senderNouns)}: A ${getRandom(recipientAdjectives)} ${getRandom(recipientNouns)}. `

  const sentences: Array<string> = [
    generated1, 
    generated2, 
    generated3, 
    generated4, 
    generated5, 
    getRandom(defaultSentencesSet1), 
    getRandom(defaultSentencesSet2), 
    getRandom(recipientGender === 'female' ? forHerSentences : forHimSentences)
  ]

  const body: string = sentences.sort(() => Math.random() - 0.5).join('') + generated6

  const signOff: string = `Yours ${getRandom(adverbs)}, `
  const senderName: string = `${sender ? sender : 'Anonymous'}`

  const letter: LoveLetter = { generated: true, salutation: salutation, body: body, signOff: signOff, sender: senderName }

  return letter
}

export { generateLetter }