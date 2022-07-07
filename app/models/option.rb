# == Schema Information
#
# Table name: options
#
#  id          :bigint           not null, primary key
#  label       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :bigint
#
# Indexes
#
#  index_options_on_question_id  (question_id)
#
class Option < ApplicationRecord
    belongs_to :question, optional: true

end
