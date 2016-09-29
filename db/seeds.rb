# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{
  id: 1,
  email: 'test1@123.com',
  password: '123123123'
},{
  id: 2,
  email: 'test2@123.com',
  password: '123123123'
}])

10.times do |i|
  Role.create(id: i + 2, name: "test_#{i}")
end
