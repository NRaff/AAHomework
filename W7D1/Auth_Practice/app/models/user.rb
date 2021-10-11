class User < ApplicationRecord
  attr_reader :password

  before_validation :ensure_session_token

  validates :username, :session_token, presence: true
  validates :password_digest, presence: {message: 'Password can\'t be blank'}
  validates :password, length: { minimum: 6, allow_nil: true }

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def find_by_credentials(username, password)
    User
      .where(username: username)
      .where(password_digest: )

  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
