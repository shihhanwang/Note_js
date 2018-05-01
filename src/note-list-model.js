(function(exports){

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.createNote = function (string) {
    this.notes.push(new Note(string).text);
  };

  NoteList.prototype.list = function () {
    return this.notes;
  };

  exports.NoteList = NoteList;

})(this);