import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LinksController {
  public async index({ view, params }: HttpContextContract) {
    const business = await Database.query()
      .from('businesses')
      .where('username', params.username)
      .firstOrFail()
    const links = await Database.query()
      .from('links')
      .where('business_id', business.id)
      .orderBy('name', 'asc')
    const theme = 'dark'
    const avatar = business.avatar
      ? business.avatar
      : 'https://ui-avatars.com/api/?name=' + business.name + '&color=1C1C1C&background=fff'

    return view.render(`links/${theme}`, {
      avatar: avatar,
      username: params.username,
      links: links,
    })
  }
}
