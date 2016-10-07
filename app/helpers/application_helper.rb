module ApplicationHelper
  def current_page
    (params[:page] || 1).to_i
  end

  def message_type(type)
    case type
    when 'notice'
      'info'
    when 'alert'
      'error'
    else
      type
    end
  end

  def side_menu
    # items = [{
    #   title: '权限组',
    #   key: 'group_permission',
    #   icon: 'mail',
    #   items: [{
    #     title: '权限表',
    #     key: 'table_per',
    #     items: [{
    #       title: '编辑',
    #       key: edit_admin_role_path(1),
    #       can: true
    #     }, {
    #       title: '新建',
    #       key: new_admin_role_path,
    #       can: false
    #     }]
    #   }, {
    #     title: '所有权限',
    #     key: admin_roles_path,
    #     can: true
    #   }]
    # }]
    #items.map { |item| item[:items].reject! { |i| !i[:can] }; item }
    items = [{
      title: '权限组',
      key: 'authorization',
      icon: 'mail',
      items: [{
        title: '权限列表',
        key: admin_roles_path,
        can: can?(:read, Role)
      }]
    }, {
      title: '用户',
      key: 'users',
      icon: 'user',
      items: [{
        title: '用户列表',
        key: admin_users_path,
        can: can?(:read, User)
      }]
    }]
  end

end
