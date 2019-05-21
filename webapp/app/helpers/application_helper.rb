module ApplicationHelper
  def webpack_asset_path(path)
    return "http://localhost:3500/static#{path}" if Rails.env.development?
  end
end
