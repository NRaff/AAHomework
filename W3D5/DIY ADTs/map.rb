class Map
  def initialize
    @map = Array.new { [] }
  end

  # set a key value pair in the map (can create or update)
  def set(key, value)
    if key?(key)
      @map[key_index(key)] = [key, value]
    else
      @map << [key, value]
    end
  end

  # gets the value for key if it exists
  def get(key)
    return @map[key_index(key)][1] if key?(key)
  end

  # delete a key value pair given a specific key
  def delete(key)

  end

  # shows the whole map
  def show

  end

  # gets all of the keys in a flattened array
  def keys
    return [] if @map.length <= 1
    @map.map { |sub| sub[0] }
  end

  # check if a given key exists
  def key?(key)
    keys.include?(key)
  end

  # gets the index of the sub_array where the key exists (otherwise, nil)
  def key_index(key)
    return keys.index(key) if key?(key)
  end
end