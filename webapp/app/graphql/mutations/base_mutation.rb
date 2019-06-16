class Mutations::BaseMutation < GraphQL::Schema::RelayClassicMutation
  class_attribute :_model
  def self.model(klass)
    self._model = klass
  end
  def self.iargument(name, type, desc = nil, **opt)
    if desc.nil? && !self._model.nil?
      desc = self._model.human_attribute_name name
    end
    argument(name, type, desc, **opt)
  end
end
