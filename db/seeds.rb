# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    { first_name: 'Michael', last_name: 'Gehrtz', email: 'test@gmail.com', username: 'mgehrtz', password: 'Test1234' },
    { first_name: 'Bryanna', last_name: 'Gehrtz', email: 'test2@gmail.com', username: 'bgehrtz', password: 'Test1234' },
    { first_name: 'Reyla', last_name: 'Gehrtz', email: 'test3@gmail.com', username: 'rgehrtz', password: 'Test1234' }
])

posts = Post.create([
    { content: 'This is a post.', user_id: users[0].id },
    { content: 'This is also a post.', user_id: users[1].id },
    { content: 'This is the best post there ever was.', user_id: users[2].id }
])
