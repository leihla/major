# Title: Liquid Liquify
# URL: https://stackoverflow.com/a/17046748
#
# Description: Allows to expand nested liquid-templates in
#       (e.g. liquid-variables in the YAML front matter):

require 'liquid'

module Jekyll
  module LiquifyFilter
    def liquify(input)
      Liquid::Template.parse(input).render(@context)
    end
  end
end

Liquid::Template.register_filter(Jekyll::LiquifyFilter)