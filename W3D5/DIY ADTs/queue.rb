class Queue
  def initialize
    @queue = []
  end

  # adds an element to the back
  def enqueue(ele)
    @queue << ele
  end

  # removes the element from the front 
  def dequeue
    @queue.shift
  end

  # Returns the element at the front of the line
  def peek
    @queue[0]
  end
end