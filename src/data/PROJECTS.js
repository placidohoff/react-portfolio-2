import timecardImage from '../assets/timecard.png'
import noteTakerImage from '../assets/notetaker.png'
import spaceShootImage from '../assets/spaceshooter.png'
import invoiceImage from '../assets/invoiceApp.png'
import scorecardsImage from '../assets/scorecards.png'
import messagerImage from '../assets/messager.png'
import amazonImage from '../assets/amazon.png'


export const PROJECTS = [
    {
        name: 'Time-Card Application',
        description: 'A full stack application where users can log in and update to their timecard during the week. At the start of the work week, the user logs in and creates a new time card and each day of the weel the user logs in and inputs the necessary data for that day. The application saves the progess to be resumed and added to and at the end of the week the user can finalize the time card to be saved in their records and now they have the option to create a new time card for the week and repeat the process. Useful to keep track of their weekly timecards online',
        builtWith: 'Built with: React.js & Firebase',
        image: timecardImage,
    },
    {
        name: 'Note-Taking Application',
        description: `This is a full stack application that allows users to log in and create a collection of notes that can be saved and returned to at a later time. Each user can have an unlimited collection of notes and each collection of notes can have an unlimited amount of chapters with content that be added to and edited or deleted seemlessly. The notes are saved to a database table associated with that particular user's email address.`,
        builtWith: 'Built with: React.js & Firebase',
        image: noteTakerImage,
    },
    {
        name: 'Space-Shooter',
        description: `A classic and fun game concept; the player collects as many coins as they can all the while avoiding and/or destroying the enemies that will be attacking. Try again and again to beat your own high score.`,
        builtWith: 'Built with: React.js & Firebase',
        image: spaceShootImage,
    },
    {
        name: 'Work Order Invoice App',
        description: `This is a full stack application where a construction contractor can create work order invoices to be approved and signed by their clients. Here is a sample of this application where a guest can to log in as an admin to see how the application generates work orders based on materials, tax, labor, and miscellaneous charges. Each work order can be saved to a database, printed out, or saved as a .pdf file.`,
        builtWith: 'Built with: React.js & Firebase',
        image: invoiceImage,
    },
    {
        name: 'Fight Scorecards Application',
        description: `This app allows fans to make a scorecard to score a fight round by round as they are watching live. Aside from just scores, notes can also be annotated for each round. Scorecards are saved to a database allowing users to retrieve the previous scorecards and notes that they might want to view at a future time perhaps to compare with others.`,
        builtWith: 'Built with: React.js & Firebase',
        image: scorecardsImage,
    },
    {
        name: 'Group Message App',
        description: `An online web application where users can enter a screename and post text messages to an online group chat for everyone else to and see when they enter the chat.`,
        builtWith: 'Built with: React.js & Firebase',
        image: messagerImage,
    },
    {
        name: 'Group Message App',
        description: `This is a full stack application where I recreated the amazon website to a much smaller scale. Their are only 5 products available to choose from but you can freely add these items to your shopping cart or remove them as you want.`,
        builtWith: 'Built with: React.js & Firebase',
        image: amazonImage,
    },
]