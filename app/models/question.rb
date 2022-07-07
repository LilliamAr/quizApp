# == Schema Information
#
# Table name: questions
#
#  id          :bigint           not null, primary key
#  description :integer          default(0)
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  quiz_id     :bigint
#
# Indexes
#
#  index_questions_on_quiz_id  (quiz_id)
#
class Question < ApplicationRecord
    belongs_to :quiz
    has_many :options
    accepts_nested_attributes_for :options
    enum :descriptions, { free_text: 0, one_selection: 1, multiple_selection: 2 }

end
