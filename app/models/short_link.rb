class ShortLink < ApplicationRecord

  HASH_LENGTH = 6
  HASH_SALT = 'yhS7PAZfeMMaUNdmurqWacnN'
    
  @@hashid = Hashids.new(HASH_SALT, HASH_LENGTH)

  belongs_to :link

  before_create :assign_url

  def self.generate_url(id)
    @@hashid.encode(id)
  end

  def assign_url 
    self.url = ShortLink.generate_url(link.id)
  end
end
