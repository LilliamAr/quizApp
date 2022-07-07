module QuestionsHelper
    def question_type(selected)
        types = ["Free Text", "Single selection", "Multiple Selection" ]
        return types[selected]
    end
end
