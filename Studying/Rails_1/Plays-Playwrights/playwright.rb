require_relative 'plays_db_connect'

class Playwright

  attr_accessor :id, :name, :birth_year

  def initialize(pw_hash)
    @id = pw_hash['id']
    @name = pw_hash['name']
    @birth_year = pw_hash['birth_year']
  end

  def self.all
    data = PlayDBConnection.instance.execute(<<-SQL, )
      select *
      from playwrights
    SQL
    data.map { |playwright| Playwright.new(playwright) }

  end

  def self.find_by_name(name)
    data = PlayDBConnection.instance.execute(<<-SQL, name)
      select *
      from playwrights
      where name = ?
    SQL

    data.map { |playwright| Playwright.new(playwright) }
  end

  def save
    if @id
      update
    else
      create
    end
    puts("Saved!")
  end

  def create
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
      insert into
        playwrights (name, birth_year)
      values
        (?, ?)
    SQL
    @id = PlayDBConnection.instance.last_insert_row_id
    puts("Added #{@name} at #{@id}")
  end

  def update
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year, @id)
      update
        playwrights
      set
        name = ?, birth_year = ?
      where
        id = ?
    SQL
    puts("Updated #{@name} at #{@id}")
  end

  def get_plays
    data = PlayDBConnection.instance.execute(<<-SQL, @id)
      select *
      from plays
      where playwright_id = ?
    SQL
    data.map { |play| Playwright.new(play) }
  end
end