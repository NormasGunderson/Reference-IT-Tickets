let notes = [
    {
        id: 1,
        title: "My First Note",
        timestamp: Date.now(),
        contents:
            "Lose client to 10:00 meeting open door policy start procrastinating 2 hours get to do work while procrastinating open book pretend to read while manager stands and watches silently nobody is looking quick do your web search manager caught you and you are fured, for technologically savvy, so player-coach, for cannibalize."
    },
    {
        id: 2,
        title: "My Second Note",
        timestamp: Date.now(),
        contents:
            "Drill down gain traction, up the flagpole bazooka that run it past the boss jump right in and banzai attack will they wont they its all greek to me unless they bother until the end of time maybe vis a vis too many cooks over the line.We need evergreen content move the needle work let is pressure test this, or tiger team granularity we need distributors to evangelize the new line to local markets. Form without content style without meaning we need to crystallize a plan. Curate can you send me an invite?."
    },
];

let currentId = 3

function getNotes(searchTerm) {
    if (!searchTerm) {
        return notes;
    }
    return notes.filter(note => note.title.includes(searchTerm.toLowerCase()) || note.contents.includes(searchTerm.toLowerCase()))
}
exports.getNotes = getNotes

function getNote(id) {
    return notes.find((note) => note.id === id);
}
exports.getNote = getNote

function addNote(note) {
    notes.push({
        ...note,
        id: currentId,
        timestamp: Date.now(),
    });
    currentId++
}
exports.addNote = addNote

function deleteNote(id) {
    notes = notes.filter((note) => note.id !== id);
}
exports.deleteNote = deleteNote