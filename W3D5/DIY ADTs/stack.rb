class Stack
  def initialize
    @stack = []
  end

  # adds an element to the top of the stack
  def push(ele)
    @stack << ele
  end

  # removes an element from teh top of the stack
  def pop
    @stack.pop
  end

  # returns the element at the top of the stack
  def peek
    @stack[-1]
  end
end