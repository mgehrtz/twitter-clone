json.array! @posts do |post|
    json.id         post.id
    json.content    post.content
    json.username   '@' + post.user.username
end