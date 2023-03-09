import fantasyPrompts from '../../../static/prompts/fantasy.json'
import scifiPrompts from '../../../static/prompts/scifi.json'
import romancePrompts from '../../../static/prompts/romance.json'
import journalPrompts from '../../../static/prompts/journal.json'
import {PromptsEnum, Prompts} from '../../../types/prompts'

export const getPrompts = (promptType: number): Prompts[] => {
    let genrePrompts
    switch (promptType) {
        case PromptsEnum.fantasy:
            genrePrompts = fantasyPrompts
            break;
        case PromptsEnum.scifi:
            genrePrompts = scifiPrompts
            break;
        case PromptsEnum.journal:
            genrePrompts = journalPrompts
            break;
        case PromptsEnum.romance:
            genrePrompts = romancePrompts
            break;    
        default:
            genrePrompts = journalPrompts
            break;
    }
    return genrePrompts
}