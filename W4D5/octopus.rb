fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
        'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
          # => "fiiiissshhhhhh"
def sluggish(arr)
  biggest = ''
  (0...arr.length - 1).each do |f|
    (f...arr.length).each do |o|
      biggest = arr[f].length > arr[o].length ? arr[f] : arr[o]
    end
  end
  biggest
end

def dominant(arr)
  return arr if arr.length <= 1
  mid = arr.length / 2
  left = arr[0...mid]
  right = arr[mid..-1]
  merge(dominant(left),dominant(right))
end

def merge(left, right)
  results = []
  until left.empty? || right.empty?
    if left.first < right.first
      results << left.shift
    else
      results << right.shift
    end
  end
  if left.empty?
    results += right
  else
    results += left
  end
end

def clever(arr)
  biggest = 0
  (0...arr.length - 1).each do |fish|
    biggest = arr[fish].length > arr[fish + 1].length ? arr[fish] : arr[fish + 1]
  end
  biggest
end

array = [1,2,3,4,5,6,7,8,9].shuffle!
p sluggish(fish)
fish_size = dominant(fish.map(&:length)).last
p fish.select { |fish| fish.length == fish_size}.first
p clever(fish)