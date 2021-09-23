require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:dessert) { Dessert.new('Peach', 10, chef) } 
  
  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to_not be_empty
    end
    it "sets a quantity" do
      expect(dessert.quantity).to be_instance_of(Integer)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to be_empty
      expect(dessert.ingredients).to be_instance_of(Array)
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new('Ice', 'hey',chef) }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    before(:each) {dessert.add_ingredient('chocolate')}
    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients.length).to eq(1)
    end
  end

  describe "#mix!" do
    before(:each) {dessert.add_ingredient('chocolate')}
    before(:each) {dessert.add_ingredient('coffee')}
    it "shuffles the ingredient array" do
      expect(dessert.mix!).to_not eq(['chocolate', 'coffee'])
    end
  end

  describe "#eat" do
    before(:each) {dessert.eat(3)}
    it "subtracts an amount from the quantity" do
      expect(dessert.quantity).to eq(7)
    end
    
    it "raises an error if the amount is greater than the quantity" do
      expect { dessert.eat(11) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return('Chef')
      expect(dessert.serve).to eq "Chef has made 10 Peaches!"
    end
  end

  describe "#make_more" do
    
    # before(:each) {dessert.make_more}
    it "calls bake on the dessert's chef with the dessert passed in" do
      allow(chef).to receive(:bake)  
      # expect(:make_more).to call(:bake).with(self)
      expect(chef).to receive(:bake).with(dessert)
    end
  end
end
