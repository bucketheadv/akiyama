class AdminAuthorization
  CONFIG = YAML.load(File.open(Rails.root.join("config", "admin_authorization.yml")))
end
