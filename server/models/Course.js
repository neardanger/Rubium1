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
      Course.create({title: 'JavaScript', featured: true, published: new Date('10/12/2015'), tags: ['C#']});
      Course.create({title: 'Loving C++', featured: false, published: new Date('10/1/2015'), tags: ['C++']});
      Course.create({title: 'Why jade is terrible', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
      Course.create({title: 'Pedantic C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
      Course.create({title: '20+ counting', featured: true, published: new Date('10/13/2015'), tags: ['JS']});
      Course.create({title: 'Maintainable Code', featured: true, published: new Date('3/1/2016'), tags: ['Coding']});
      Course.create({title: 'A Survival Guide To Coding', featured: true, published: new Date('2/1/2016'), tags: ['Coding']});
      Course.create({title: 'Stack Overflow', featured: true, published: new Date('10/7/2016'), tags: ['Misc']});
      Course.create({title: 'How to keep your coding job', featured: false, published: new Date('8/1/2015'), tags: ['Management']});
      Course.create({title: 'Accepting Failure', featured: false, published: new Date('11/1/2015'), tags: ['Misc']});
      Course.create({title: 'Writing Code the right way', featured: true, published: new Date('10/13/2015'), tags: ['Coding']});
      Course.create({title: 'Code Reviews', featured: false, published: new Date('10/1/2015'), tags: ['Coding']});
      Course.create({title: 'How to Deal with criticism', featured: true, published: new Date('2/15/2015'), tags: ['Misc']});
      Course.create({title: 'Using React', featured: true, published: new Date('7/1/2015'), tags: ['Coding', 'Misc']});
      Course.create({title: 'Angular.js guide', featured: true, published: new Date('7/11/2015'), tags: ['Coding', 'Misc']});
      Course.create({title: 'Coding in F#', featured: true, published: new Date('8/1/2012'), tags: ['F#','Coding']});
      Course.create({title: 'Learn to learn', featured: true, published: new Date('11/1/2012'), tags: ['Misc']});
      Course.create({title: 'Does HTML or CSS count as coding?', featured: true, published: new Date('10/13/2012'), tags: ['HTML','CSS']});
      Course.create({title: 'HTML and CSS', featured: false, published: new Date('10/1/2012'), tags: ['CSS','HTML']});
      Course.create({title: 'How to Deal with Coworkers', featured: true, published: new Date('2/15/2012'), tags: ['Misc']});
      Course.create({title: 'Angular vs React', featured: false, published: new Date('7/1/2012'), tags: ['Coding', 'Misc','React']});
      Course.create({title: 'Pretend to know what you are talking about', featured: true, published: new Date('7/11/2012'), tags: ['Coding', 'Misc']});
    }
  })
};

exports.createDefaultCourses = createDefaultCourses;
