# == Schema Information
#
# Table name: quizzes
#
#  id          :bigint           not null, primary key
#  description :string
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Quiz < ApplicationRecord
    has_many :questions
    accepts_nested_attributes_for :questions

end
