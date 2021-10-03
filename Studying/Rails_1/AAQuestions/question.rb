require_relative 'questions_database'

class Question

  attr_reader :id
  attr_accessor :title, :body, :author_id

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      select *
      from questions
      where id = ?
    SQL
    Question.new(data.first)
  end

  


end