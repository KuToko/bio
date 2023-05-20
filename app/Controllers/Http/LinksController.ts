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

    return view.render(`links/${theme}`, {
      username: params.username,
      links: links,
    })
  }
}
