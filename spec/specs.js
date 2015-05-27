describe('palindrome', function() {
  it('finds if the string is a palindrome', function() {
    expect(palindrome("poop")).to.equal(true)
    expect(palindrome("chimichanga")).to.equal(false)
  });

  it("finds if the integer is a palindrome", function() {
    expect(palindrome("11511")).to.equal(true)
  });

  it("finds if the integer is not a palindrome", function() {
    expect(palindrome("12345")).to.equal(false)
  });
});
