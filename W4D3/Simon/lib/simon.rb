require 'byebug'


class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      @sequence_length += 1 
      @game_over = false
      round_success_message
    end
  end

  def show_sequence
    add_random_color
    puts @seq
  end

  def require_sequence
    gets.chomp.split(' ')
  end

  def add_random_color
    # debugger
    @seq << COLORS.sample
  end

  def round_success_message
    p 'Success!' unless @game_over

  end

  def game_over_message
    p "Nice job! You failed on round #{@sequence_length}" if @game_over
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
