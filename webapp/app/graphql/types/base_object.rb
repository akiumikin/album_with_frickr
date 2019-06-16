module Types
  class BaseObject < GraphQL::Schema::Object
    # こんな感じにメタプロしておくとalbum_type.rbのようにもかける
    # association loaderの概念をあまり知らなくてもなんとなく使えるけど
    # 標準に慣れたいのでコメントアウト

    # class_attribute :_model

    # def self.model(klass)
    #   self._model = klass
    # end

    # def self.ifield(name, type, desc = nil, **opt)
    #   if desc.nil? && !self._model.nil?
    #     desc = self._model.human_attribute_name name
    #   end
    #   field(name, type, desc, **opt)
    # end
  
    # def self.preload(lst)
    #   lst.each do |association_name|
    #     define_method(association_name) do
    #       load(association_name)
    #     end
    #   end
    # end
  
    # def load(association_name)
    #   AssociationLoader.for(self._model, association_name).load(object)
    # end
  end
end
