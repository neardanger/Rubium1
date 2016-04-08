var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});
courseSchema.methods = {

};
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Course.create({title: 'C#', featured: true, published: new Date('10/5/2015'), tags: ['Js']});
      Course.create({title: 'Tetss', featured: true, published: new Date('10/12/2015'), tags: ['C#']});
      Course.create({title: 'Dank', featured: false, published: new Date('10/1/2015'), tags: ['C++']});
      Course.create({title: 'Does this work', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
      Course.create({title: 'Pedantic C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
      Course.create({title: '20+ counting', featured: true, published: new Date('10/13/2015'), tags: ['JS']});
      Course.create({title: 'Maintainabl', featured: true, published: new Date('3/1/2016'), tags: ['Coding']});
      Course.create({title: 'A Survival Guide', featured: true, published: new Date('2/1/2016'), tags: ['Coding']});
      Course.create({title: 'How to basic', featured: true, published: new Date('10/7/2016'), tags: ['Misc']});
      Course.create({title: 'How to keep', featured: false, published: new Date('8/1/2015'), tags: ['Management']});
      Course.create({title: 'Telliingf', featured: false, published: new Date('11/1/2015'), tags: ['Misc']});
      Course.create({title: "Writing Code", featured: true, published: new Date('10/13/2015'), tags: ['Coding']});
      Course.create({title: 'Code Reviews', featured: false, published: new Date('10/1/2015'), tags: ['Coding']});
      Course.create({title: 'How to Deal with', featured: true, published: new Date('2/15/2015'), tags: ['Misc']});
      Course.create({title: 'Kek mank meme', featured: true, published: new Date('7/1/2015'), tags: ['Coding', 'Misc']});
      Course.create({title: 'Kanker Sore', featured: true, published: new Date('7/11/2015'), tags: ['Coding', 'Misc']});
    }
  })
};

exports.createDefaultCourses = createDefaultCourses;
