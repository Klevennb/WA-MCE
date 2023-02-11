import { Entry } from "types/types";

export const countStreak = (entries: Entry[]) => {
    const dayLength = 86400000
    let streak = 0
    let date = Date.now();
    const sortedEntries = entries.sort((entryA, entryB)=> new Date(entryA.submission_time) < new Date(entryB.submission_time) ? 1 : -1)
    for (let i = 0; i < sortedEntries.length; i++) {
        if ((date - Date.parse(sortedEntries[i].submission_time)) < dayLength ) {
            streak = streak + 1
            date = date - dayLength
        } else {
            break
        }
    }
    return streak
}

// export const countStreak = (entries: Entry[]) => {
//     let streak = 0;
//     let lastProcessedDate = null;
//     for (let i = entries.length - 1; i >= 0; i--) {
//         if(entries[i].isDeleted) continue;
//         const currentDate = new Date(entries[i].submission_time).toDateString();
//         if (lastProcessedDate === currentDate) {
//             streak++;
//         } else {
//             break;
//         }
//         lastProcessedDate = currentDate;
//     }
//     return streak;
// }

// export const countStreak = (entries: Entry[]) => {
//     let streak = 0;
//     let lastProcessedDate = null;
//     for (let i = entries.length - 1; i >= 0; i--) {
//         if(entries[i].isDeleted) continue;
//         if(!lastProcessedDate) lastProcessedDate = new Date(entries[i].submission_time).toDateString();
//         const currentDate = new Date(entries[i].submission_time).toDateString();
//         if (lastProcessedDate === currentDate) {
//             streak++;
//         } else {
//             streak = 1;
//         }
//         lastProcessedDate = currentDate;
//     }
//     return streak;
// }