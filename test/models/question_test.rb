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
require "test_helper"

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
