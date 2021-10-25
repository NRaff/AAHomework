function Student(first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.first} ${this.last}`;
}

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
}

Student.prototype.courseLoad = function() {
  let load = {};
  for (i=0; i< this.courses.length; i++) {
    let course = this.courses[i];
    if (load[course.department]) {
      load[course.department] += course.num_creds;
    } else {
      load[course.department] = course.num_creds;
    }
  }
  return load;
}

function Course(name, department, num_creds) {
  this.name = name;
  this.department = department;
  this.num_creds = num_creds;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

let s1 = new Student("nick", "raff");
let s2 = new Student("billy", "b");
let s3 = new Student("andrew", "amaroso");

let c1 = new Course("a","d1",3);
let c2 = new Course("a", "d2", 3);
let c3 = new Course("a", "d3", 2);
let c4 = new Course("a", "d2", 5);
let c5 = new Course("a", "d3", 2);

s1.enroll(c1);
s1.enroll(c2);
s1.enroll(c3);
s1.enroll(c4);
console.log(s1.courseLoad());


