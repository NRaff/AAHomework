require_relative 'plays_db_connect'

class Play
  attr_accessor :id, :title, :year, :playwright_id
  
  def self.find_by_title(title)
    data = PlayDBConnection.instance.execute(<<-SQL, title)
      select *
      from plays
      where title = ?
    SQL
    data.map { |play| Play.new(play)}
  end

  def self.find_by_playwright(name)
    data = PlayDBConnection.instance.execute(<<-SQL, name)
      select plays.*
      from plays
      join playwrights
      on plays.playwright_id = playwrights.id
      where playwrights.name = ?
    SQL

    data.map { |play| Play.new(play) }
  end

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    data.map { |datum| Play.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id, self.id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end