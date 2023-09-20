class Task < ApplicationRecord
    validates :description, presence: true
    validates :due_date, presence: true
end
