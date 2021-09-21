require 'byebug'

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @p1_name = name1
    @p2_name = name2
    @cups = Array.new(14)
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.map!.with_index { |cup, idx| idx == 13 || idx == 6 ? [] : [:stone] * 4 }
  end

  def valid_move?(start_pos)
    case true
    when !(0...@cups.length).include?(start_pos)
      raise 'Invalid starting cup'
    when @cups[start_pos].empty?
      raise 'Starting cup is empty'
    end
  end

  def make_move(start_pos, current_player_name)
    hand = @cups[start_pos].slice!(0..-1)
    cup = (start_pos + 1) % @cups.length
    # debugger
    until hand.empty?
      wrong_goal = current_player_name == @p1_name ? 13 : 6
      @cups[cup] << hand.shift unless cup == wrong_goal
      cup += 1
    end
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
