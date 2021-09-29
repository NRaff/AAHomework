require_relative 'play_db_connection'
require_relative 'play'

class Playwright
  attr_accessor :id, :name, :birth_year

  def initialize(options)
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']
  end

  def self.all
    data = PlayDBConnection.instance.execute(<<-SQL )
      SELECT * FROM playwrights;
    SQL

    data.map { |playwright| Playwright.new(playwright) }
  end

  def self.find_by_name(name)
    data = PlayDBConnection.instance.execute(<<-SQL name)
      SELECT *
      FROM playwrights
      WHERE name = ?;
    SQL

    data.map { |playwright| Playwright.new(playwright) }
  end

  def create
    raise "#{name} already in database" if @id
    PlayDBConnection.instance.execute(<<-SQL @name, @birth_year)
      INSERT INTO 
        playwrights (name, birth_year)
      VALUES (?, ?)
    SQL

    @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{name} doesn't exist in the database" unless @id
    PlayDBConnection.instance.execute(<<-SQL @name, @birth_year, @id)
      UPDATE playwrights
      SET name = ?, birth_year = ?
      WHERE id = ?
    SQL
    return true
  end

  def get_plays
    PlayDBConnection.instance.execute(<<-SQL @id)
      SELECT *
      FROM plays
      WHERE playwright_id = ?
    SQL

    data.map { |play| Play.new(play) }
  end

end