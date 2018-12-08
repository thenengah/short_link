class Link < ApplicationRecord
  has_one :short_link, dependent: :destroy

  validates :url, presence: true
  validate :validate_url

  after_create :create_short_link

  def create_short_link 
    ShortLink.new({ link: self }).save
  end

  def validate_url 
    valid = begin
      URI.parse(url).kind_of?(URI::HTTP)
    rescue URI::InvalidURIError
      false
    end
    errors.add(:url, :blank, message: 'is invalid') if !valid
  end

  def short_url
    short_link ? short_link.url : nil
  end

  def to_json
    { errors: errors.full_messages, link: attributes.merge(short_url: short_url) }
  end
end
