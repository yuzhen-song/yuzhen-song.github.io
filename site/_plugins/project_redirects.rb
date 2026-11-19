# Keep previously published project URLs working after permalink changes.
module Jekyll
  class ProjectRedirects < Generator
    safe true
    priority :low

    def generate(site)
      site.collections.fetch("projects").docs.each do |project|
        legacy_url = project.data["legacy_permalink"]
        next unless legacy_url

        directory = legacy_url.sub(%r{\A/}, "")
        page = PageWithoutAFile.new(site, site.source, directory, "index.html")
        page.data.merge!(
          "layout" => "redirect",
          "redirect_to" => project.url,
          "title" => project.data["title"],
          "sitemap" => false
        )
        site.pages << page
      end
    end
  end
end
