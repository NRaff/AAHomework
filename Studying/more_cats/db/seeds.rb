# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create([
  {birth_date: "2015/01/20", color: "Red", name: "Clifford", sex: "M", description: "clifford, the big red cat!"},
  {birth_date: "2016/01/20", color: "Blue", name: "Garfield", sex: "F", description: "Loves lasagna!"},
  {birth_date: "2017/01/20", color: "Green", name: "Yoshi", sex: "F", description: "I eat em up!"},
  {birth_date: "2018/01/20", color: "Red", name: "Mike", sex: "F", description: "I'm the color red!"},
  {birth_date: "2019/01/20", color: "Blue", name: "Charis", sex: "M", description: "Meowtime"}
])

CatRentalRequest.create([
  {cat_id: 1, start_date: '1/1/2021', end_date: '1/7/2021'},
  {cat_id: 2, start_date: '1/1/2021', end_date: '1/7/2021', status: 'APPROVED'},
  {cat_id: 3, start_date: '1/1/2021', end_date: '1/7/2021', status: 'DENIED'},
  {cat_id: 4, start_date: '1/1/2021', end_date: '1/7/2021', status: 'DENIED'},
  {cat_id: 2, start_date: '1/4/2021', end_date: '3/7/2021'},
  {cat_id: 3, start_date: '12/1/2021', end_date: '12/7/2021', status: 'APPROVED'},
  {cat_id: 2, start_date: '7/1/2021', end_date: '7/7/2021'}
])